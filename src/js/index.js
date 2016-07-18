import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import OsuParser from 'osu-parser-web';

import { Extension } from './containers';
import reducers from './reducers';
import { setBeatmap, setBeatmapCover, setLoading, setShouldCalculate } from './actions';

const store = createStore(
  reducers
);

chrome.runtime.onMessage.addListener((msg) => {
  store.dispatch(msg);
});

const url = document.location.toString();
const match = url.toLowerCase().match(/^https?:\/\/(osu|new).ppy.sh\/([bs])\/(\d+)#?(\d+)?/);
const isOldSite = match[1] === 'osu';
const isBeatmap = match[2] === 'b';
const id = match[3];

let promise = null;
let beatmapSetId = null;
let beatmapId = null;
let isUnranked = false;

if (isOldSite) {
  // For the old (current) version of the site ID values must be found from the page source.
  promise = fetch(url)
  .then(res => res.text())
  .then(html => {
    beatmapSetId = isBeatmap
      ? html.match(/beatmap-rating-graph\.php\?s=(\d+)/)[1]
      : id;

    beatmapId = isBeatmap
      ? id
      : html.match(/class='beatmapTab active' href='\/b\/(\d+)/)[1];

    // Check for 'Updated' text instead of 'Qualified' or 'Ranked'
    isUnranked = !!html.match('<td width=0%>\nSubmitted:<br/>\nUpdated:\n</td>');

    return fetch(`https://osu.ppy.sh/osu/${beatmapId}`);
  });
} else {
  beatmapSetId = match[3];
  beatmapId = match[4];
  promise = fetch(`https://osu.ppy.sh/osu/${beatmapId}`);
}

promise.then(res => res.text())
.then(OsuParser.parseContent)
.then(beatmap => {
  const cleanBeatmap = Object.assign({}, beatmap, { Mode: beatmap.Mode || '0' });

  if (cleanBeatmap.Mode !== '0') {
    throw Error('Unsupported gamemode :(');
  }

  store.dispatch(setBeatmap(cleanBeatmap));

  // Preload beatmap cover
  const coverUrl = isUnranked
    ? `https://b.ppy.sh/thumb/${beatmapSetId}l.jpg`
    : `https://assets.ppy.sh//beatmaps/${beatmapSetId}/covers/cover.jpg`;
  const cover = new Image();
  cover.src = coverUrl;

  return new Promise(resolve => {
    cover.onload = () => resolve(cover);
    cover.onerror = () => resolve();
    cover.onabort = () => resolve();
  });
})
.then(cover => {
  if (cover) {
    store.dispatch(setBeatmapCover(cover.src));
  }

  store.dispatch(setLoading(false));
  store.dispatch(setShouldCalculate(true));
});

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
ReactDOM.render(
  <Provider store={store}>
    <Extension />
  </Provider>,
  rootElement
);
