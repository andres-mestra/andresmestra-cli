import { PostsProvider } from '../../../context/PostsContext'
import EditorHeader from '../../../components/editor/EditorHeader'
import EditorTitle from '../../../components/editor/EditorTitle'
import MarkdownEditor from '../../../components/editor/MarkdownEditor'

import { editor__container } from '../../../styles/components/editor/editorpost.module.scss'
import SettingsMenu from '../../../components/settings/SettingsMenu'

const NewPost = () => {
  return (
    <PostsProvider>
      <div className={editor__container}>
        <EditorHeader text="posts" status="Draft" url="/admin/posts" />
        <SettingsMenu />
        <EditorTitle />
        <MarkdownEditor />
      </div>
    </PostsProvider>
  )
}

NewPost.layout = 'ADMIN'
export default NewPost
