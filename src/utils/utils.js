export const firstToUpperCase = ( str ) => {
    return str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
}

export const imagesLoaded = (parentNode) => {
  const imgElements = parentNode.querySelectorAll('img');
  for (const img of imgElements) {
    if (!img.complete) {
      return false;
    }
  }
  return true;
}