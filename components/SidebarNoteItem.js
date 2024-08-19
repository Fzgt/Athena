import dayjs from 'dayjs';
import SidebarNoteItemContent from '@/components/SidebarNoteItemContent';
import SidebarNoteItemHeader from '@/components/SidebarNoteItemHeader';

export default function SidebarNoteItem({ noteId, note }) {

    const { title, content = '', updateTime } = note;
    return (
        <SidebarNoteItemContent
            id={noteId}
            title={note.title}
            expandedChildren={   //通过props RSC传给客户端组件传值
                <p className="sidebar-note-excerpt">
                    {content.substring(0, 20) || <i>(No content)</i>}
                </p>
            }>

            <SidebarNoteItemHeader title={title} updateTime={updateTime} />
            {/* 像下边这种通过JSX对象 RSC传给客户端组件传值  或者  封装成上边这种 SidebarNoteItemHeader 
                <header className="sidebar-note-header">
                    <strong>{title}</strong>
                    <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
                    这里的dayjs虽然是传给了一个客户端组件，但是这个组件是在服务端组件渲染，所以dayjs不会被打包进客户端代码
                </header>  */}
        </SidebarNoteItemContent>
    );
}
