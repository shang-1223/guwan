const getImgUrl = file => {
    return new URL(`../images/${file}`, import.meta.url).href;
  };
  export default getImgUrl;