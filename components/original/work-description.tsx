type Props = {
  content: string
}
const WorkDescription = ({ content }: Props) => {
  return (
    <div
      className="[&_p]:mb-4 [&_p]:leading-[1.6rem] [&_li]:list-disc [&_li]:ml-4 [&_li:not(:last-child)]:mb-1 [&_hr]:block [&_hr]:my-4"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default WorkDescription
