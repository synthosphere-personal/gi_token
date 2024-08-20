import list_img_1 from '@/assets/img/others/40x40 gi.png';
import list_img_2 from '@/assets/img/others/matic 40x40.png';
import list_img_3 from '@/assets/img/others/40x40 gi.png';
import matic from '@/assets/img/logo/matic-logo.webp'
import gi from '@/assets/img/others/40x40 gi.png'
import { ITokenomics } from '@/types/tokenomics-type';

const tokenomics_data:ITokenomics[] = [
  {
    id:2,
    token_subtitle:'Gaming Intelligence',
    token_title:'tokenomics',
    token_description:'Total Supply(Bsc+Polygon)',
    live_link:'https://www.twitch.tv/videos/1726788358',
    team:'Spartan iv',
    status:'Online',
    list_items:[
      {
        id:1,
        images:gi,
        dis:'founders & team',
        percentage:'10%'
      },
      {
        id:2,
        images:gi,
        dis:'pre sale',
        percentage:'30%'
      },
      {
        id:3,
        images:gi,
        dis:'airdrop bounty',
        percentage:'20%'
      },
      {
        id:4,
        images:gi,
        dis:'cex & dex liquidity',
        percentage:'25%'
      },
      {
        id:5,
        images:gi,
        dis:'marketing and token development',
        percentage:'15%'
      },
    ]
  },
]

export default tokenomics_data;
