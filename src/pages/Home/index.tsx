import { FC } from 'react'
import { Helmet } from 'react-helmet'
import { Texts } from '@/constants'

import styles from './index.module.scss'

const HomePage: FC = () => {
  return (
    <div className={styles.pageHome}>
      <Helmet>
        <title>Home | {Texts.APP_NAME}</title>
      </Helmet>
      <h1>Home</h1>
    </div>
  )
}

export default HomePage
