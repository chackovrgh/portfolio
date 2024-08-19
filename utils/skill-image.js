import * as adobeXd from '/public/svg/skills/adobe-xd.svg';
import adobeaudition from '/public/svg/skills/adobeaudition.svg';
import afterEffects from '/public/svg/skills/after-effects.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import c from '/public/svg/skills/c.svg';
import canva from '/public/svg/skills/canva.svg';
import cplusplus from '/public/svg/skills/cplusplus.svg';
import css from '/public/svg/skills/css.svg';
import django from '/public/svg/skills/django.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import illustrator from '/public/svg/skills/illustrator.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import lightroom from '/public/svg/skills/lightroom.svg';
import matlab from '/public/svg/skills/matlab.svg';
import microsoftoffice from '/public/svg/skills/microsoftoffice.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import numpy from '/public/svg/skills/numpy.svg';
import photoshop from '/public/svg/skills/photoshop.svg';
import php from '/public/svg/skills/php.svg';
import picsart from '/public/svg/skills/picsart.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import premierepro from '/public/svg/skills/premierepro.svg';
import python from '/public/svg/skills/python.svg';
import react from '/public/svg/skills/react.svg';
import typescript from '/public/svg/skills/typescript.svg';
import vitejs from '/public/svg/skills/vitejs.svg';
import webix from '/public/svg/skills/webix.svg';
import wordpress from '/public/svg/skills/wordpress.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'vitejs':
      return vitejs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'java':
      return java;
    case 'matlab':
      return matlab;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'adobe audition':
      return adobeaudition;
    case 'django':
      return django;
    case 'git':
      return git;
    case 'lightroom':
      return lightroom;
    case 'numpy':
      return numpy;
    case 'premiere pro':
      return premierepro;
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'microsoft office':
      return microsoftoffice;
    case 'canva':
      return canva;
    case 'picsart':
      return picsart;
    default:
      break;
  }
};
