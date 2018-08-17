// in src/allAlbums.js
import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'react-admin/lib';
import { Button } from '../node_modules/@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';




export const AlbumList = (props) => (

  <div>
  

    <div> 

      <Button name="btnAllAlbum" Style="primary" size="large">全部</Button>
      <Button name="btnSoloAlbum" size="large">個人</Button>
      <Button name="btnTeamAlbum" size="large">團體</Button>
    </div>

    <div Height="1000px">

    </div>



    <div >
      目前沒有寫真集，請先新增寫真集
    </div>    
  </div>


/*

<List title="寫真書作品集" {...props}>     
      
      <Datagrid>
      </Datagrid>

    </List>
    */
);

export default () => (
  <Card>
      <CardHeader title="Welcome to the administration" />
      <CardContent>Lorem ipsum sic dolor amet...</CardContent>
  </Card>
);