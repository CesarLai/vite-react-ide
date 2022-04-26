import { Texts } from '@/constants'
import { FC } from 'react'
import { Helmet } from 'react-helmet'

import styles from './index.module.scss'

const EditorPage: FC = () => {
  return (
    <div className={styles.pageEditor}>
      <Helmet>
        <title>Editor | {Texts.APP_NAME}</title>
      </Helmet>
      <h1>Editor</h1>
    </div>
  )
}

export default EditorPage
