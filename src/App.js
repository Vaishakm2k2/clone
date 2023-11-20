

import './App.css';


function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div style={{height:'70%'}} className="upperSide">
          <div style={{marginBottom:'2.5rem'}} className="upperSideTop d-flex align-items-center">
            <img style={{width:'70px'}} src="https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-on-transparent-background-png.png" alt="" className='logo ms-1' /><span style={{fontSize:'2rem'}} className='name'>ChatGPT</span>
            <button className="midBtn"><i style={{paddingRight:'1rem'}} class="fa-solid fa-plus"></i>New Chat</button>
            </div>
            <div className="upperSideBottom">
              <button className="query"><i class="fa-regular fa-message"></i>What is Programming</button>
              <button className="query"><i class="fa-regular fa-message"></i>How to use an API</button>
            </div>
         </div>
        <div className="lowerSide">
          <div className="listItems"><i class="fa-solid fa-house"></i>Home</div>
          <div className="listItems"><i class="fa-solid fa-bookmark"></i>&nbsp;Saved</div>
          <div className="listItems"><i class="fa-solid fa-rocket"></i>Upgrade to Pro</div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className='chatImg' src="https://t4.ftcdn.net/jpg/05/50/95/87/360_F_550958748_OeGcRonEUNoVhd0wjd9zSEMhLFIGO9Bt.jpg" alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quia vero? A eveniet distinctio exercitationem quidem non nulla iure doloremque ab nihil, itaque maxime, amet sed harum, autem officia? Soluta.</p>
          </div>
          <div className="chat bot">
            <img className='chatImg' src="https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png" alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab libero, sequi obcaecati cupiditate laboriosam facilis voluptates velit nihil eius culpa quasi repudiandae nobis id quod provident, animi cum enim laborum explicabo? Rem dolor ducimus officiis! Fugiat cupiditate numquam veritatis tempora beatae facilis ab, quasi asperiores dolore, quos autem minus nemo aliquid, dolorum id temporibus sapiente suscipit? Nemo eum sed facere odit quisquam accusamus enim esse voluptatem minima cumque excepturi odio, hic tempore dolorum velit necessitatibus accusantium. Non, repudiandae illum? Dolor quidem pariatur odit sapiente numquam fugit recusandae deserunt ducimus vero rerum. Quis consectetur est dolores. Ab unde error iusto voluptatum!</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message'/><button className='send'><i style={{color:'white'}} class="fa-solid fa-paper-plane"></i></button>
          </div>
          <p>chatGPT may produce inaccurate information about people,places,or facts.ChatGPT August 20 Version.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
