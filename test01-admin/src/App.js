// in src/App.js
import React from 'react';
import { fetchUtils,Admin, Resource } from 'react-admin/lib';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import { AlbumList } from './allAlbums';
import { AddAlbumList } from './addAlbums';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import AAAAIcon from '@material-ui/icons/Cake';
import allAlbums from './allAlbums';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import simpleRestProvider from 'ra-data-simple-rest';




const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }

    // add your own headers here
  options.headers.set('X-Custom-Header', 'foobar');
  return fetchUtils.fetchJson(url, options);
}

//const dataProvider = simpleRestProvider('http://path.to.my.api/', httpClient);



const App = () => (
//<Admin dataProvider={dataProvider}>
   //  <Resource name="Album" list={allAlbums} />
        
  <Admin allAlbums={allAlbums} authProvider={authProvider} dataProvider={dataProvider}>

  <Admin dataProvider={simpleRestProvider('http://path.to.my.api/')}>
  <Resource name="allAlbums" list={allAlbums} />
  

  
  <Admin dataProvider={dataProvider}>
        <Resource name="allAlbums" options={{ label: '寫真書作品集' }} list={AlbumList} icon={AAAAIcon}/>  
        <Resource name="addAlbums" options={{ label: '新增寫真書' }} list={AddAlbumList} icon={AAAAIcon}/>  
        
        
        </Admin> 
        </Admin>      
  </Admin>
 //</Admin>
//<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
//<Resource name="users" list={UserList} icon={UserIcon} />


);

export default App;


