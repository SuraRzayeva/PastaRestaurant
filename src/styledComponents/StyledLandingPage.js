import Styled from 'styled-components'
import background from '../images/background.jpg'
import { brown, yellow, beige } from './GlobalStyle'

export const StyledLandingPage = Styled.div`

width: 100%;
box-sizing: border-box;

.hero {
    height: 900px;
    background: url(${background}) no-repeat;
    background-size: cover;
    background-position: 0 -250px;
    position: relative;
    

    .title {
        position: absolute;
        top: 28%;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .blocks {
        width: 800px;
        height: 800px;
        position: absolute;
        bottom: -400px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: row;

     .column {
         width: 25%;
         display: flex;
         flex-direction: column;
            .box {
                width: 100%;
                height: 25%;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: .3s ease all;
                .halfBox {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: .3s ease-in-out all;
                }

                .white {
                    color: ${beige};
                }
                .yellow {
                    color: ${yellow};
                }
                .brown {
                    color: ${brown};
                }
             
            }
     }

     .column1 {
       

         .box2 {
            background: rgba(93, 61, 40, .5);
            
         }

         .box4 {
            background: ${brown};
            position: relative;
         }

         .box4:after {
             content: '';
             width: 60px;
             height: 60px;
             background: ${yellow};
             position: absolute;
             left: -60px;
             top: -60px;
         }
     }

     .column2 {
        .box1 {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
      
            .halfBox {
                width: 100%;
                height: 50%;
                background: rgba(239, 207, 0, .5);

                h4 {
                    color: ${brown};
                }

            }
            .halfBox:hover {
                background: rgba(239, 207, 0, 0.7);
                cursor: pointer;
            }
         }

         .box3 {
            background: rgb(239, 207, 0);
         }
     }

     .column3 {

         .box2 {
            background: rgba(239, 207, 0, .5);
         }

         .box4 {
             display: flex;
             align-items: flex-start;
             justify-content: flex-start;
           .halfBox {
            background: ${brown};
            width: 50%;
            height: 50%;
           }
         }
     }

     .column4 {
         .box3 {
            background: rgb(239, 207, 0);
            position: relative;
         }

         .box3:after {
            content: '';
            width: 60px;
            height: 60px;
            background: ${brown};
            position: absolute;
            bottom: -60px;
            right: -60px;
        }       
     }
    }
}

.preFooter {
    height: 600px;
    width: 100%;

}

.footer {
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    .content-box {
        width: 920px;
        height: 100%;
        display: flex;


        .block {
            box-sizing: border-box;
            padding: 10px;
   
        }

        p, h4 {
            padding: 0;
            margin: 0;
            color: ${brown};
        }

        h4 {
            margin-bottom: 20px;
        }

        p {
            margin-bottom: 5px;
            font-size: 12px;
        }

        .hours-block {
            height: 100%;
            width: ${920 / 4}px;
            
        
        }

        .contact-block {
            height: 100%;
            width: ${920 / 4}px;
  

            p {
                color: ${yellow};
                font-weight: bold;
                font-size: 20px;
                margin: 0;
           
            }
        }

        .address-block {
            height: 100%;
            width: ${920 / 2}px;
            display: flex;
            flex-direction: column;

            .top-blocks {
                width: 100%;
                height: 35%;

                display: flex;
                .address {
                    width: 50%;
                    height: 100%;
            

                    
                }
                .follow {
                    .icons {
                        display: flex;
                      .icon {
                        margin-right: 20px;
                      }
                    }
                    
                }
            }

            .bottom-block {
                width: 100%;
                height: 50%;
           

                input {
                    background: transparent;
                    border-style: none;
                    border-bottom: 2px ${brown} solid;
                    width: 350px;
                    padding-bottom: 5px;
                    box-sizing: border-box;
                }

                input: focus {
                    outline: none;
                }

                input::placeholder{
                    opacity: .4;
                    color: ${brown};
                }

                button {
                    border-style: none;
                    width: 350px;
                    height: 40px;
                    margin: 0;
                    margin-top: 10px;
                    background: ${yellow};
                    padding: 0;
                    font-size: 12px;
                    letter-spacing: 1px;
                    color: ${brown};
                    font-weight: 600;
                }

                p {
                    margin-top: 30px;
                }
            }
        }
    }
}
`
