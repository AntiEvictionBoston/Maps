class Images {
  static images = {
    east_boston: "https://cdn.rawgit.com/AntiEvictionBoston/utility/2991a68a06316f83a7bfaa73b69c76d43195cc7b/images/neighborhoods/east_boston.jpg",
    benningtonSt: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/10_bennington_st.png",
    brooksSt: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/10_brooks_st.png",
    maverickStreet21: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/21_maverick_st.png",
    maverickStreet17: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/17_maverick_st.png",
    saratogaPorch: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/22_saratoga_porch.png",
    saratogaStreet: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/22_saratoga_street.png",
    chelseaStreet25: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/25_chelsea_st.png",
    chelseaStreet35: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/35_chelsea_street.png",
    lubecStreet: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/64_lubec_street.png",
    goveStreetMailbox: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/gove_street_mailboxes.png",
    goveStreet: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/gove_street.png",
    chilcott11: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/1-chilcott1.jpeg",
    oakwood31: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/3-oakwood1.jpeg",
    beach61: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/6-beach1.jpeg",
    rugglesstreet9131: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/9-13-ruggles-street1.jpeg",
    maverickst171: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/17-maverick-1.jpeg",
    gove_natalia: "https://cdn.rawgit.com/AntiEvictionBoston/utility/3e195f45369d10b365f0d171624061e1f3b87e02/images/gove_natalia.jpg",
    riverstreet431: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/43-rosa-street1.jpeg",
    tremont611: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/61-tremont1.jpeg",
    johnny11: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/johnny-1.jpeg",
    johnny12: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/johnny-2.jpeg",
    rosastreet1: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/rosa-street-1.jpeg",
    rosastreet2: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/rosa-street-2.jpeg",
    chinatown: "https://cdn.rawgit.com/AntiEvictionBoston/utility/2991a68a06316f83a7bfaa73b69c76d43195cc7b/images/neighborhoods/chinatown.jpg",
    hyde_mattapan: "https://cdn.rawgit.com/AntiEvictionBoston/utility/2991a68a06316f83a7bfaa73b69c76d43195cc7b/images/neighborhoods/hyde_mattapan.jpg",
    wash_corridor: "https://cdn.rawgit.com/AntiEvictionBoston/utility/2991a68a06316f83a7bfaa73b69c76d43195cc7b/images/neighborhoods/wash_corridor.jpg",
    waldeckstreet1: "https://cdn.rawgit.com/AntiEvictionBoston/utility/455f0f50/images/waldeckstreet1.jpg",
    orlandostreet1: "https://cdn.rawgit.com/AntiEvictionBoston/utility/455f0f50/images/orlandostreet1.jpg",
    sumnerstreet1: "https://cdn.rawgit.com/AntiEvictionBoston/utility/455f0f50/images/sumnerstreet1.jpg",
    homesteadstreet1: "https://cdn.rawgit.com/AntiEvictionBoston/utility/455f0f50/images/homesteadstreet1.jpg",
    hudsonstreet1: "https://cdn.rawgit.com/AntiEvictionBoston/utility/455f0f50/images/hudsonstreet1.jpg",
    tylerstreet1: "https://cdn.rawgit.com/AntiEvictionBoston/utility/455f0f50/images/tylerstreet1.jpg",
  }

  static eagerLoad = () => {
    Object.keys(Images.images).forEach( (key) => {
      let i = new Image();
      i.src = Images.images[key];
    });
  }
}

export default Images;
