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
    <main>
      <Helmet>
        <title>ECサンプル</title>
      </Helmet>
      <h1>ECサンプル</h1>
      <h2>Should you fry with olive oil or expose it to very high temperatures?
      </h2>
      <p style={{textAlign: 'left'}}>You’ve probably heard it said that olive oil should not be temperature abused; that it’s better to add it ’raw’ in salads or drizzled on a dish after cooking. It is also established practice not to fry with olive oil, given cited issues about its cooking performance and safety, including trans fatty acid formation and carcinogenic compounds. But are these myths or not?</p>
      <p style={{textAlign: 'left'}}>All vegetable oils are almost entirely composed of triglycerides (97-98 percent). These consist of fatty acids, of which there are three types: saturated, with zero double bonds; monounsaturated, with one double bond; and polyunsaturated, with two or more double bonds. All vegetable oils contain these three types of triglyceride, albeit in varied proportions, and every oil has its own fatty acid profile; its own character. For example, olive oil is a monounsaturated oil because it is rich in oleic acid (C18:1), a fatty acid with 18 carbon atom chains and one double bond, whereas sunflower and rapeseed oil are rich in linoleic acid (18:2). It turns out that the heat resistance during cooking in a vegetable oil depends on the number of double bonds that it has in its dominant fatty acids. Thus, <a href="https://www.newfoodmagazine.com/news/108060/coconut-oil-reduces-metabolic-syndrome-in-obese-females-study-finds/" rel="noopener">coconut oil</a> is the most stable cooking oil in terms of oxidative stability and sunflower and rapeseed oil, as polyunsaturated-rich vegetable oils, are heat sensitive.</p>
      <div>
        <img style={{width: '800px'}} src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"/>
        <p style={{textAlign: 'left'}}>Coconut oil is the most stable cooking oil in terms of oxidative stability but the antioxidant content of olive oil counters any negative effects during heating</p>
        <p style={{textAlign: 'left'}}>All vegetable oils are almost entirely composed of triglycerides (97-98 percent). These consist of fatty acids, of which there are three types: saturated, with zero double bonds; monounsaturated, with one double bond; and polyunsaturated, with two or more double bonds. All vegetable oils contain these three types of triglyceride, albeit in varied proportions, and every oil has its own fatty acid profile; its own character. For example, olive oil is a monounsaturated oil because it is rich in oleic acid (C18:1), a fatty acid with 18 carbon atom chains and one double bond, whereas sunflower and rapeseed oil are rich in linoleic acid (18:2). It turns out that the heat resistance during cooking in a vegetable oil depends on the number of double bonds that it has in its dominant fatty acids. Thus, <a href="https://www.newfoodmagazine.com/news/108060/coconut-oil-reduces-metabolic-syndrome-in-obese-females-study-finds/" rel="noopener">coconut oil</a> is the most stable cooking oil in terms of oxidative stability and sunflower and rapeseed oil, as polyunsaturated-rich vegetable oils, are heat sensitive.</p>
      </div>
      <div
      dangerouslySetInnerHTML={{
        __html: productTag()
      }}
      />
      <p style={{textAlign: 'left'}}>Coconut oil is the most stable cooking oil in terms of oxidative stability but the antioxidant content of olive oil counters any negative effects during heating</p>
      <p style={{textAlign: 'left'}}>All vegetable oils are almost entirely composed of triglycerides (97-98 percent). These consist of fatty acids, of which there are three types: saturated, with zero double bonds; monounsaturated, with one double bond; and polyunsaturated, with two or more double bonds. All vegetable oils contain these three types of triglyceride, albeit in varied proportions, and every oil has its own fatty acid profile; its own character. For example, olive oil is a monounsaturated oil because it is rich in oleic acid (C18:1), a fatty acid with 18 carbon atom chains and one double bond, whereas sunflower and rapeseed oil are rich in linoleic acid (18:2). It turns out that the heat resistance during cooking in a vegetable oil depends on the number of double bonds that it has in its dominant fatty acids. Thus, <a href="https://www.newfoodmagazine.com/news/108060/coconut-oil-reduces-metabolic-syndrome-in-obese-females-study-finds/" rel="noopener">coconut oil</a> is the most stable cooking oil in terms of oxidative stability and sunflower and rapeseed oil, as polyunsaturated-rich vegetable oils, are heat sensitive.</p>
      <div
      dangerouslySetInnerHTML={{
        __html: collectionTag()
      }}
      />
    </main>
  );
}

export default Index;
