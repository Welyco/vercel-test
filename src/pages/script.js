import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  const productTag = () => {
    return (`<div id='product-component-1624868432309'></div>
    <script type="text/javascript">
    /*<![CDATA[*/
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'otorii.myshopify.com',
          storefrontAccessToken: '2cbba8000a3a9c7e632fe51797da59da',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '6546314199203',
            node: document.getElementById('product-component-1624868432309'),
            moneyFormat: '%C2%A5%7B%7Bamount_no_decimals%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0",
              "margin-bottom": "50px"
            },
            "text-align": "left"
          },
          "title": {
            "font-size": "26px"
          },
          "button": {
            ":hover": {
              "background-color": "#a14e01"
            },
            "background-color": "#b35701",
            ":focus": {
              "background-color": "#a14e01"
            }
          },
          "price": {
            "font-size": "18px"
          },
          "compareAt": {
            "font-size": "15.299999999999999px"
          },
          "unitPrice": {
            "font-size": "15.299999999999999px"
          }
        },
        "layout": "horizontal",
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "description": false
        },
        "width": "100%",
        "text": {
          "button": "カートに入れる"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            ":hover": {
              "background-color": "#a14e01"
            },
            "background-color": "#b35701",
            ":focus": {
              "background-color": "#a14e01"
            }
          },
          "title": {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "bold",
            "font-size": "26px",
            "color": "#4c4c4c"
          },
          "price": {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "normal",
            "font-size": "18px",
            "color": "#4c4c4c"
          },
          "compareAt": {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "normal",
            "font-size": "15.299999999999999px",
            "color": "#4c4c4c"
          },
          "unitPrice": {
            "font-family": "Helvetica Neue, sans-serif",
            "font-weight": "normal",
            "font-size": "15.299999999999999px",
            "color": "#4c4c4c"
          }
        },
        "text": {
          "button": "Add to cart"
        }
      },
      "option": {},
      "cart": {
        "styles": {
          "button": {
            ":hover": {
              "background-color": "#a14e01"
            },
            "background-color": "#b35701",
            ":focus": {
              "background-color": "#a14e01"
            }
          }
        },
        "text": {
          "title": "カート",
          "total": "小計",
          "button": "会計に進む"
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#b35701",
            ":hover": {
              "background-color": "#a14e01"
            },
            ":focus": {
              "background-color": "#a14e01"
            }
          }
        }
      }
    },
          });
        });
      }
    })();
    /*]]>*/
    </script>`)
  };
  const collectionTag = () => {
    return (`<div id='collection-component-1624871814594'></div>
    <script type="text/javascript">
    /*<![CDATA[*/
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'otorii.myshopify.com',
          storefrontAccessToken: '2cbba8000a3a9c7e632fe51797da59da',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('collection', {
            id: '272804544675',
            node: document.getElementById('collection-component-1624871814594'),
            moneyFormat: '%C2%A5%7B%7Bamount_no_decimals%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px",
              "width": "calc(25% - 20px)"
            },
            "img": {
              "height": "calc(100% - 15px)",
              "position": "absolute",
              "left": "0",
              "right": "0",
              "top": "0"
            },
            "imgWrapper": {
              "padding-top": "calc(75% + 15px)",
              "position": "relative",
              "height": "0"
            }
          },
          "button": {
            ":hover": {
              "background-color": "#a14e01"
            },
            "background-color": "#b35701",
            ":focus": {
              "background-color": "#a14e01"
            }
          }
        },
        "text": {
          "button": "カートに入れる"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            ":hover": {
              "background-color": "#a14e01"
            },
            "background-color": "#b35701",
            ":focus": {
              "background-color": "#a14e01"
            }
          }
        },
        "text": {
          "button": "Add to cart"
        }
      },
      "option": {},
      "cart": {
        "styles": {
          "button": {
            ":hover": {
              "background-color": "#a14e01"
            },
            "background-color": "#b35701",
            ":focus": {
              "background-color": "#a14e01"
            }
          }
        },
        "text": {
          "title": "カート",
          "total": "小計",
          "button": "会計に進む"
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#b35701",
            ":hover": {
              "background-color": "#a14e01"
            },
            ":focus": {
              "background-color": "#a14e01"
            }
          }
        }
      }
    },
          });
        });
      }
    })();
    /*]]>*/
    </script>`)
  };
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <div
    dangerouslySetInnerHTML={{
      __html: productTag()
    }}
    />
  );
}

export default Index;
