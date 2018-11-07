import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import cheerio from 'cheerio-without-node-native';

async function loadGraphicCards(page = 1) {
    const searchUrl = `https://www.amazon.de/s/?page=${page}&keywords=graphic+card`;
    const response = await fetch(searchUrl);  // fetch page 
  
    const htmlString = await response.text(); // get response text
    const $ = cheerio.load(htmlString);       // parse HTML string
  
    return $("#s-results-list-atf > li")             // select result <li>s
      .map((_, li) => ({                      // map to an list of objects
        asin: $(li).data("asin"),                   
        title: $("h2", li).text(),                
        price: $("span.a-color-price", li).text(),
        rating: $("span.a-icon-alt", li).text(),
        imageUrl: $("img.s-access-image").attr("src")
      }));
  }

  class App extends Component {
    state = {
      page: 0,
      items: [],
    };
  
    componentDidMount = () => this.loadNextPage();
  
    loadNextPage = () =>
      this.setState(async state => {
        const page = state.page + 1;
        const items = await loadGraphicCards(page);
        return {items, page};
      });
  
    render = () => (
      <ScrollView>
        {this.state.items.map(item => <Item {...item} key={item.asin}/>)}
      </ScrollView>
    );
  }
  
  const Item = props => (
    <TouchableOpacity onPress={() => alert("ASIN:" + props.asin)}>
      <Text>{props.title}</Text>
      <Image source={{uri: props.imageUrl}}/>
      <Text>{props.price}</Text>
      <Text>{props.rating}</Text>
    </TouchableOpacity>
  );