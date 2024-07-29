// type
type IMenuDataType = {
  id: number;
  title: string;
  link: string;
  sub_menu?: {
      title: string;
      link: string;
  }[];
}

const menu_data:IMenuDataType[] = [
  {
    id:1,
    title:'Home',
    link:'/',
  },
  {
    id:2,
    title:'ABOUT US',
    link:'/about',
  },
  {
    id:3,
    title:'GI GAMES',
    link:'#',
    sub_menu:[
      {title:'GI CRYPTO BUBBLE SHOOTER',link:'/tournament-details'},
      {title:'GI CRYPTO BLAST',link:'/tournament-details'},
      {title:'GI CRYPTO RUSH',link:'/tournament-details'},
    ]
  },
  // {
  //   id:4,
  //   title:'PAGES',
  //   link:'#',
  //   sub_menu:[
  //     {title:'Shop Details',link:'/shop-details'},
  //   ]
  // },
  {
    id:4,
    title:'News',
    link:'#',
    sub_menu:[
      {title:'Blog Details',link:'/blog-details'},
    ]
  },
  {
    id:5,
    title:'CONTACT',
    link:'/contact',
  },
]

export default menu_data;