import React, { ReactNode } from 'react';
import { useTheme } from '../theme/ThemeContext';

interface HeaderProps {
  menu: MenuItem[] | null;
  home: Home | null;
}

interface MenuItem {
  title: string;
  link: string;
}

interface Home {
  title: string;
  link: string;
}

const Header: React.FC<HeaderProps> = ({
  menu,
  home
}) => {
  const { theme } = useTheme();

  return (
    <header
      style={{
        backgroundColor: theme.text,
        color: theme.background,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
      }}>
        {
          home?.link ?   
           <h1><a href={home.link} style={{color: theme.background, textDecoration: "none"}}>{home.title}</a></h1> :
           <h1>{home?.title}</h1>
        }
        {
          menu && 
          <ul style={{
            display: "flex",
            justifyContent: "space-between"
          }}>
            {
              menu.map((item, index) => {
                return(
                  <li key={index} 
                  style={{
                    listStyleType: 'none',
                    marginLeft: '0.5rem',
                  }}>
                    <a href={item.link} style={{
                    color: theme.background
                    }}>{item.title}</a>
                  </li>
                )
              })
            }
          </ul>

        }
       </header>
  );
};

export default Header;
