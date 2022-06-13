import React from 'react';
import Stateful from '../components/react/Stateful';
import Stateless from '../components/react/Stateless';
import Props from '../components/react/Props';
import SetState from '../components/react/SetState';
import Children from '../components/react/Children';
import UseHook from '../components/react/UseHook';
import UseId from '../components/react/UseId';
import CustomHook from '../components/react/CustomHook';
import Events from '../components/react/Events';
import Styles from '../components/react/Styles';
import Portal from '../components/react/Portal';

const ReactBasics = () => {
  return (
    <ul className="list">
      <li>
        <b>Stateful: </b>
        <Stateful></Stateful>
      </li>
      <li>
        <b>Stateless: </b>
        <Stateless></Stateless>
      </li>
      <li>
        <b>Props: </b>
        <Props text="I'm a button"></Props>
      </li>
      <li>
        <b>SetState: </b>
        <SetState></SetState>
      </li>
      <li>
        <b>Children: </b>
        <Children>I'm a child</Children>
      </li>
      <li>
        <b>UseHook: </b>
        <UseHook>I'm a child</UseHook>
      </li>
      <li>
        <b>UseId: </b>
        <UseId></UseId>
      </li>
      <li>
        <b>CustomHook: </b>
        <span>{CustomHook('hola')}</span>
      </li>
      <li>
        <b>Events: </b>
        <Events></Events>
      </li>
      <li>
        <b>Styles: </b>
        <Styles></Styles>
      </li>
      <li>
        <b>Portal: </b>
        <Portal></Portal>
        <div id="portal-container"></div>
      </li>
    </ul>
  );
};

export default ReactBasics;
