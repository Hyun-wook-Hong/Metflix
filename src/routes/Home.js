import React from 'react';
import Movie from '../components/Movie';
import axios from 'axios';
import "./Home.css"
import { waitForDomChange } from '@testing-library/dom';

// 4/30 routing fix
// App.js의 내용을 Home.js로 옮김.

// className 컴포넌트
// return이 없다. 대신 render method를 갖고있다

// state: 여러 데이터를 갖고있는 object형 자료
// state는 직접 바꾸면 안되고 복사본을 만들어 데이터를 바꿔야한다
class Home extends React.Component{
  state= {
    isLoading: true,
    movies: []

  };

  getMovies = async() =>{
    // axios.get 메서드는 URL에 명시된 네트워크에서 데이터를 뽑아오는 것이라 시간이 좀 걸린다.
    // getMovies 함수를 async 형 함수로 선언, await 선언하여 함수 실행 끝날때까지 기다리라고 요청 
    const {
        data: 
        {data: { movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({ movies, isLoading:false });
    //this.setState({ movies:movies });
    // (setState의 movie : axios의 movie) => 그냥 movies라고 써도 자바스크립트는 이해함
  }

  // 이론적으로 해야할 일은 componentDidMount에 data를 fetch하는 것.
  async componentDidMount(){
    this.getMovies();
  }

  //axious

  render(){
    const { isLoading, movies } = this.state;
    return (
          <section className="container"> 
            { this.state.isLoading ? (
            <div className="loader">
              <span className="loader__text">Now Loading...</span>
            </div>
            ) : (
              <div className="movies">
  
            { movies.map( movie =>(
                  <Movie 
                    key={movie.id}
                    id={movie.id} 
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.medium_cover_image} 
                    genres={movie.genres}
                  />
              ))}
            </div>
            )}
          </section>
          );
  }
}

export default Home;
