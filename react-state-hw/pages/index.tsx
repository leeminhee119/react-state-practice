import Head from 'next/head'
import Image from 'next/image'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <Provider store={store}>
    <div style={{padding: '30px'}}>
      <h2>state managing homework</h2>
      <hr/>
      <h3>1. 모든 변수를 각각 state로 저장</h3>
        <a href='/byEachState/withProps'>
          <li>state update by props</li>
        </a>
        <a href='/byEachState/withRedux'>
          <li>state update by redux</li>
        </a>
      <h3>2. 공통 정보, 언어별 정보 object로 관리</h3>
        <a href='/byEachObject/withProps'>
          <li>state update by props</li>
        </a>
        <a href='/byEachObject/withRedux'>
          <li>state update by redux</li>
        </a>
      <h3>3. 전체 데이터를 하나의 object로 묶어 관리</h3>
        <a href='/byTopObject/withProps'>
          <li>state update by props</li>
        </a>
        <a href='/byTopObject/withRedux'>
          <li>state update by redux</li>
        </a>
    </div>
    </Provider>
  )
}
