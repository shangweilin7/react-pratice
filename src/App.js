import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props) {
  return(
    <header id="header" className="site-header">
      <div className="general-nav">
        <div className="top-bar">
          <div className="top-bar-container">
            <div className="logo-bar">
              <div className="logo-bar-container">
                <div className="site-logo-wrapper">
                  <a className="site-logo" href="/">
                    <h1>T客邦採購評測基地</h1>
                  </a>
                </div>
              </div>
            </div>

            <aside className="network-wrapper">
              <header>
                <h5>T客邦集團網路</h5>
              </header>

              <ul className="network clearfix">
                <li><a className="network-techbang" href="https://www.techbang.com">T客邦</a></li>
                <li><a className="network-pcadv" href="https://pcadv.techbang.com">電腦王</a></li>
                <li><a className="network-review" href="https://review.techbang.com">採購基地</a></li>
                <li><a className="network-digiphoto" href="https://digiphoto.techbang.com">DIGIPHOTO</a></li>
                <li><a className="network-men" href="https://mf.techbang.com">MF變型男</a></li>
                <li><a className="network-t17" href="http://t17.techbang.com">T17</a></li>
                <li><a className="network-autozone" href="https://autozone.techbang.com">玩車特區</a></li>
                <li><a href="http://gametsg.techbang.com">透視鏡</a></li>
              </ul>
            </aside>


            <div className="user-nav">
              <ul className="menu">
                  <li><a href="/admin/mains">後台</a></li>
                  <li><a href="https://i.techbang.com/settings?return_to=https%3A%2F%2Freview.techbang.com%2F">設定</a></li>
                  <li><a id="sign_out" href="/users/sign_out">登出</a></li>
              </ul>
            </div>

            <div id="categories-btn" className="categories-btn"><span>分類目錄</span></div>

            <div className="func-wrapper">
              <ul>
                <li><a className="facebook-icon" target="_blank" href="https://www.facebook.com/TKbang">facebook</a></li>
                <li><a className="line-icon" target="_blank" href="https://line.me/R/ti/p/%40mmx9155h">line</a></li>
                <li><a className="youtube-icon" target="_blank" href="https://www.youtube.com/channel/UC9IyDJ6vlG50iYjXGQpwwOQ">youtube</a></li>
                <li><div className="search-btn"></div></li>
              </ul>
            </div>

            <div id="pop-box-overlay" className="pop-box-overlay">
              <div id="overlay" className="overlay"></div>
              <div className="search-pop-box">
                <button type="button" id="close-search" className="close-search" data-dismiss="modal" aria-label="Close"></button>
                <span>搜尋文章</span>
                <div className="input-container">
                  <form className="post_search" id="post_search" action="/search" accept-charset="UTF-8" method="get">
                    <input name="utf8" type="hidden" value="✓" />
                    <input placeholder="請輸入關鍵字..." className="input-search" type="search" name="q[title_or_excerpt_cont]" id="q_title_or_excerpt_cont"/>
                    <input type="submit" name="commit" value="搜尋" className="go-search-btn" data-disable-with="搜尋" />
                  </form>    
                </div>
              </div>
            </div>
          </div>
        </div>


      <nav id="menu-bar" className="menu-bar">
        <div className="l-bg"></div>
        <div className="r-bg"></div>
        <div className="menu-bar-wrapper">
          <div className="main-nav">
            <ul>
              <li><a href="/">首頁</a></li>
              <li>
                <a href="/channels/new">新品總覽</a>
              </li>
              <li>
                <a href="/channels/tech_trends">科技趨勢</a>
              </li>
            </ul>
          </div>
          <div className="categories-list">
            <ul>
              <li>
                <a href="/channels/phone_pad">手機 / 平板 / 行動周邊</a>
              </li>
              <li>
                <a href="/channels/computer_laptop">桌機 / 筆電</a>
              </li>
              <li>
                <a href="/channels/wearable">手錶 / 手環</a>
              </li>
              <li>
                <a href="/channels/mouse_keyboard">鍵盤 / 滑鼠</a>
              </li>
              <li>
                <a href="/channels/headphone">耳機 / 喇叭 / 音響</a>
              </li>
              <li>
                <a href="/channels/camera">相機 / 運動攝影機 / 無人機</a>
              </li>
              <li>
                <a href="/channels/component">板卡 / 零組件</a>
              </li>
              <li>
                <a href="/channels/nas_storage">NAS / 儲存裝置</a>
              </li>
              <li>
                <a href="/channels/network">路由器 / 智慧家居設備</a>
              </li>
              <li>
                <a href="/channels/monitor">投影機 / 顯示器</a>
              </li>
              <li>
                <a href="/channels/printer">印表機 / 掃瞄器</a>
              </li>
              <li>
                <a href="/channels/tv">電視 / 電視盒</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <div className="mobile-nav">
      <div className="nav-bar">
        <div className="nav-button"></div>
        <a className="site-logo" href="/">
          <h1>T客邦採購評測基地</h1>
          <img src="https://s3-ap-northeast-1.amazonaws.com/techbang-review/assets/m-sitelogo-a4d259106bc3305acad56ccb3cf7d4f4.png" alt="M sitelogo" />
        </a>
        <div className="search-btn"></div>
      </div>
    </div>

    </header>
  );
}

function SlideNavWrapper(props) {
  return(
    <div className="slide-nav-wrapper">
      <div className="blur_back">&nbsp;</div>
      <nav className="main-nav">
        <ul className="nav_list">
          <li><a href="/">首頁</a></li>
            <li>
              <a href="/channels/new">新品總覽</a>
            </li>
            <li>
              <a href="/channels/tech_trends">科技趨勢</a>
            </li>
            <li>
              <a href="/channels/phone_pad">手機 / 平板 / 行動周邊</a>
            </li>
            <li>
              <a href="/channels/computer_laptop">桌機 / 筆電</a>
            </li>
            <li>
              <a href="/channels/wearable">手錶 / 手環</a>
            </li>
            <li>
              <a href="/channels/mouse_keyboard">鍵盤 / 滑鼠</a>
            </li>
            <li>
              <a href="/channels/headphone">耳機 / 喇叭 / 音響</a>
            </li>
            <li>
              <a href="/channels/camera">相機 / 運動攝影機 / 無人機</a>
            </li>
            <li>
              <a href="/channels/component">板卡 / 零組件</a>
            </li>
            <li>
              <a href="/channels/nas_storage">NAS / 儲存裝置</a>
            </li>
            <li>
              <a href="/channels/network">路由器 / 智慧家居設備</a>
            </li>
            <li>
              <a href="/channels/monitor">投影機 / 顯示器</a>
            </li>
            <li>
              <a href="/channels/printer">印表機 / 掃瞄器</a>
            </li>
            <li>
              <a href="/channels/tv">電視 / 電視盒</a>
            </li>
        </ul>
        <div className="social-media">
          <ul>
            <li><a className="facebook-icon" target="_blank" href="https://www.facebook.com/TKbang">facebook</a></li>
            <li><a className="line-icon" target="_blank" href="https://line.me/R/ti/p/%40mmx9155h">line</a></li>
            <li><a className="youtube-icon" target="_blank" href="https://www.youtube.com/channel/UC9IyDJ6vlG50iYjXGQpwwOQ">youtube</a></li>
          </ul> 
        </div>
      </nav>
    </div>
  );
}

function Banner(props) {
  return(
    <div className="banner full">
      <img src="https://s3-ap-northeast-1.amazonaws.com/techbang-review/system/images/1/original/banner.png?1517899530" alt="Banner" />
    </div>
  );
}

function Intro(props) {
  return(
    <div className="intro full">
      <div className="intro-text-wrapper">
        <div className="intro-text">
          <p>T客邦「採購評測基地」熱鬧開站！！想要購買 3C 產品，卻又毫無頭緒，不知如何挑選起嗎？在這裡你可以找到所有T客邦專業資深編輯群們撰寫的深度 3C 評測文章，以及最新科技資訊產品報導，助你採購一臂之力，以後不再花錢當冤大頭啦！</p>
        </div>
      </div>
      <div className="tri-bg"></div>
    </div>
  );
}

function MainContainer(props) {
  return(
    <div className="main-container">
      <Banner />
      <Intro />
      <HeadArticle />
      <ArticleList />
    </div>
  );
}

function Article(props) {
  return(
    <article className={props.size + "-article"}>
      <div className="article-image">
        <div className="content">
          <a target="_blank" href={"https://www.techbang.com/posts/" + props.post.id}>
            <img src={props.post.excerpt_image} />
          </a>
        </div>
      </div>
      <div className="brief">
        <div className="article-tag-wrapper">
          <div className={"article-tag " + props.post.category.slug}><a href={"/channels/" + props.post.category.slug}>{props.post.category.name}</a></div>
        </div>
        <div className="title">
          <h3>
            <a target="_blank" href={"https://www.techbang.com/posts/" + props.post.id}>
              {props.post.excerpt}
            </a>
          </h3>
        </div>
        <div className="post-metadata">
          <span className="author">{props.post.author}</span>
          <span className="post-date">{props.post.date}</span>
        </div>
      </div>
    </article>
  );
}

class LargeArticleWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      apiUrl: "http://localhost:3001/api/v1/get_head_articles?page=1&other=new",
      posts: []
    });
    this.allPosts = this.allPosts.bind(this);
  }

  componentDidMount() {
    fetch(this.state.apiUrl)
    .then(res => res.json())
    .then(data => {
      this.setState({
        posts: data.articles.slice(0, 2)
      })
    })
  }

  allPosts(post, i) {
    return(
      <Article
          key={i}
          index={i}
          size="large"
          post={post} />
    );
  }

  render() {
    const postsRender = this.state.posts.length > 0 ?
                        this.state.posts.map(this.allPosts) :
                        <div className="loading-icon"><span className="icon"></span></div>;

    return(
      <div className="large-article-wrapper">
        {postsRender}
      </div>
    );
  }
}

class SmallArticleWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      apiUrl: "http://localhost:3001/api/v1/get_head_articles?",
      posts: [],
      channel: "&other=" + this.props.channel,
      amount: this.props.amount,
      page: this.props.page
    });
    this.allPosts = this.allPosts.bind(this);
  }

  componentDidMount() {
    fetch(this.state.apiUrl + this.state.channel + '&page=' + this.state.page)
    .then(res => res.json())
    .then(data => {
      this.setState({
        posts: data.articles.slice(0, this.state.amount),
        page: this.state.page + 1
      })
    })
  }

  allPosts(post, i) {
    return(
      <Article
          key={i}
          index={i}
          size="small"
          post={post} />
    );
  }

  render() {
    const postsRender = this.state.posts.length > 0 ?
                        this.state.posts.map(this.allPosts) :
                        <div className="loading-icon"><span className="icon"></span></div>;

    return(
      <div className="small-article-wrapper">
        {postsRender}
      </div>
    );
  }
}

function HeadArticle(props) {
  return(
    <div className="head-article">
      <h2>近期新品＆科技趨勢</h2>
      <LargeArticleWrapper />
      <SmallArticleWrapper
            channel="tech_trends"
            amount="3"
            page="1" />
    </div>
  )
}

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiUrl: "http://localhost:3001/api/v1/load_more",
      source: "pages",
      other: "welcome",
      page: 1,
      posts: []
    };
    this.onClick = this.onClick.bind(this);
    this.allPosts = this.allPosts.bind(this);
  }

  componentDidMount() {
    fetch(this.state.apiUrl + '?source=' + this.state.source + '&other=' + this.state.other + '&page=' + this.state.page)
    .then(res => res.json())
    .then(data => {
      this.setState({
        posts: this.state.posts.concat(data.articles)
      })
    });
  }

  onClick(e) {
    e.preventDefault();

    this.setState({
      page: this.state.page + 1
    }, function() {
      this.componentDidMount()
    });
  }

  allPosts(post, i) {
    return(
      <Article
          key={i}
          index={i}
          size="small"
          post={post} />
    );
  }

  render() {
    const postsRender = this.state.posts.length > 0 ?
                        this.state.posts.map(this.allPosts) :
                        <div className="loading-icon"><span className="icon"></span></div>;
    return(
      <div class="article-list">
        <h2>最新文章</h2>
        <div class="small-article-wrapper">
          {postsRender}
        </div>

        <div class="load-more">
          <a class="load-more-posts" onClick={this.onClick}>
            <p>閱讀更多</p>
          </a>
        </div>
      </div>
    );
  }
}

function Footer() {
  return(
    <footer>
      <div class="footer-container">
        <div class="content">
          <div class="news-letter">
            <form action="https://feedburner.google.com/fb/a/mailverify" method="post" target="popupwindow" onsubmit="window.open('https://feedburner.google.com/fb/a/mailverify?uri=techbang', 'popupwindow', 'scrollbars=yes,width=550,height=520');return true;">
              <input type="text" name="email" placeholder="訂閱T客邦的電子報" />
              <input type="hidden" value="techbang" name="uri" />
              <input type="hidden" name="loc" value="zh_TW" />
              <input type="submit" value="訂閱" />
            </form>
          </div>
          <div class="func-wrapper">
            <ul class="social-media">
              <li class="attention">關注我們</li>
              <li><a class="facebook-icon" target="_blank" href="https://www.facebook.com/TKbang">facebook</a></li>
              <li><a class="line-icon" target="_blank" href="https://line.me/R/ti/p/%40mmx9155h">line</a></li>
              <li><a class="youtube-icon" target="_blank" href="https://www.youtube.com/channel/UC9IyDJ6vlG50iYjXGQpwwOQ">youtube</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="copyright full">
        <div class="content">
          <span>© 2017 Cite Media Holding Group 版權所有。</span>
        </div>
      </div>
    </footer>
  );
}

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div>
        <Header />
        <SlideNavWrapper />
        <MainContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
