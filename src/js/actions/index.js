
export function setDisabled(status) {
  return {
    type: 'SET_DISABLED',
    data: status,
  };
}

export function setHidden(status) {
  return {
    type: 'SET_HIDDEN',
    data: status,
  };
}

export function setLoading(status) {
  return {
    type: 'SET_LOADING',
    data: status,
  };
}

export function setBeatmap(beatmap) {
  return {
    type: 'SET_BEATMAP',
    data: beatmap,
  };
}

export function setBeatmapCover(cover) {
  return {
    type: 'SET_BEATMAP_COVER',
    data: cover,
  };
}

export function setShouldCalculate(status) {
  return {
    type: 'SET_SHOULD_CALCULATE',
    data: status,
  };
}

export function setCalculating(status) {
  return {
    type: 'SET_CALCULATING',
    data: status,
  };
}

export function setPP(pp) {
  return {
    type: 'SET_PP',
    data: pp,
  };
}

export function setAccuracy(accuracy) {
  return {
    type: 'SET_ACCURACY',
    data: accuracy,
  };
}


export function setCombo(combo) {
  return {
    type: 'SET_COMBO',
    data: combo,
  };
}


export function setModifiers(modifiers) {
  return {
    type: 'SET_MODIFIERS',
    data: modifiers,
  };
}


export function setMisses(misses) {
  return {
    type: 'SET_MISSES',
    data: misses,
  };
}
