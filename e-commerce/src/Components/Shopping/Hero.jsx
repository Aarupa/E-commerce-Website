import homepage1 from '../../assets/homepage1.jpeg'
import homepage2 from '../../assets/homepage2.jpeg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

  function Hero() {
    return(
        <Wrapper className='section-center'>
        <div className='content'>
            <h1><b>Design Your Comfort Zone</b></h1>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <button className='btn hero-btn'><b>Shop Now</b></button>
        </div>
        <div className='img-container'>
            <img src={homepage1} alt="home pic"  className='main-img'/>
            <img src={homepage2} alt="home pic2" className='accent-img'/>
        </div>

        </Wrapper>
    )
}

const Wrapper = styled.section`
  min-height: 50vh;
  display: grid;
  place-items: center;

  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
      font-size: 2.25rem;
    }

    p {
      font-size: 1.25rem;
    }

    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      color : white;
      background-color:#9e4436;
    }

    .img-container {
      display: block;
      position: relative;
    }

    .main-img {
      width: 100%;
      height: 500px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`
export default Hero;