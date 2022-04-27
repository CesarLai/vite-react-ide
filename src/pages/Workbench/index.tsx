import { Texts } from '@/constants'
import { FC } from 'react'
import { Helmet } from 'react-helmet'

import styles from './index.module.scss'

const WorkbenchPage: FC = () => {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>Workbench | {Texts.APP_NAME}</title>
      </Helmet>
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <img className="icon" src="/favicon.svg" alt="app icon" />
          <span className="title">{Texts.APP_NAME}</span>
        </div>
      </header>
    </div>
  )
}

export default WorkbenchPage
