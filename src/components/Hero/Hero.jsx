import css from './Hero.module.css';
import { SearchBox } from '../SearchBox/SearchBox';

import bannerMobile1x from '../../assets/img/Banner-mobile.png';
import bannerMobile2x from '../../assets/img/Banner-mobile2x.png';
import bannerTablet1x from '../../assets/img/Banner-tablet.png';
import bannerTablet2x from '../../assets/img/Banner-tablet2x.png';
import bannerDesktop1x from '../../assets/img/Banner-desktop.png';
import bannerDesktop2x from '../../assets/img/Banner-desctop2x.png';

const Hero = ({ onSearch }) => {
  return (
    <section className={css.container}>
      <picture>
        {/* Десктоп */}
        <source
          media="(min-width: 1280px)"
          srcSet={`${bannerDesktop1x} 1x, ${bannerDesktop2x} 2x`}
          sizes="100%"
        />
        {/* Планшет */}
        <source
          media="(min-width: 768px)"
          srcSet={`${bannerTablet1x} 1x, ${bannerTablet2x} 2x`}
          sizes="100%"
        />
        {/* Мобільний */}
        <source
          media="(max-width: 767px)"
          srcSet={`${bannerMobile1x} 1x, ${bannerMobile2x} 2x`}
          sizes="100%"
        />
        {/* fallback */}
        <img
          src={bannerMobile1x}
          alt="Hero banner"
          className={css.backgroundImage}
          decoding="async"
          fetchPriority="high"
        />
      </picture>

      <div className={css.overlay} />
      <div className={css.hero}>
        <h1 className={css.heroTitle}>Plan, Cook, and Share Your Flavors</h1>
        <SearchBox onSubmit={onSearch} />
      </div>
    </section>
  );
};

export default Hero;
