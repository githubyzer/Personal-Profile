import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaDiscord, FaGithub, FaReact } from 'react-icons/fa'; // Importing social media icons

const Home = () => {
  return (
    <div className="text-center mt-5">
      <h1><b>˗ˏˋ Welcome to Yzer's Profile ★ ˎˊ˗</b></h1>
      <p>This is my personal space where I share details about myself, my skills, and how to get in touch.</p>
      <p>Navigate on my page using the links above, or connect with me using my social media accounts below. I hope you have an amazing day! ⋆｡°✩</p>

      <div className="social-media mt-4">
        <h3><b>Connect ˚ʚ♡ɞ˚</b></h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ margin: '10px' }}>
            <FaFacebookF style={{ color: 'black', marginRight: '8px' }} />
            <a href="https://www.facebook.com/yzerjake"><span>Yzer Jake Navarroza</span></a>
          </li>
          <li style={{ margin: '10px' }}>
            <FaInstagram style={{ color: 'black', marginRight: '8px' }} />
            <a href="https://www.instagram.com/wxyzerthanyu"><span>@wxyzerthanyu</span></a>
          </li>
          <li style={{ margin: '10px' }}>
            <FaTwitter style={{ color: 'black', marginRight: '8px' }} />
            <a href="https://x.com/wxyzerthanyu"><span>@wxyzerthanyu</span></a>
          </li>
          <li style={{ margin: '10px' }}>
            <FaDiscord style={{ color: 'black', marginRight: '8px' }} />
            <span><b>@ice_jake</b></span>
          </li>
          <li style={{ margin: '10px' }}>
            <FaGithub style={{ color: 'black', marginRight: '8px' }} />
            <a href="https://github.com/githubyzer"><span>githubYzer</span></a>
          </li>
        </ul>
      </div>

      <div className="made-with-react mt-5">
        <p>Made with<FaReact className="react-logo" /><a href="https://react.dev/"><span><b>React</b></span></a></p>
      </div>
    </div>
  );
};

export default Home;
