import fsp from "fs/promises";
import path from "path";
import yaml from "js-yaml";
import Image from "next/image";
import Link from "next/link";
import Markdoc from '@markdoc/markdoc';

export const getStaticProps = async () => {
  const data = yaml.load(await (fsp.readFile(path.join(process.cwd(), "pages", "timeline.yml"))));

  return {
    props: {
      data
    },
  };
};

const Timeline = ({ data }) => {
  const timeline = data.map((project, i) => {
    const ast = Markdoc.parse(project.desc || '');
    const content = Markdoc.transform(ast);

    return (
      <div key={project.image} className={`timelineRow ${i % 2 ? "even" : "odd"}`}>
        <div className="projYear">{project.projYear}</div>
        <div className="projContent flex flex-row grow">
          <div className="basis-5/12 projText">
            <h2 className="projTitle font-condensed text-2xl mb-2 mt-2">{project.year} {project.title}</h2>
            <div className="projDesc" dangerouslySetInnerHTML={{__html: Markdoc.renderers.html(content)}}></div>
            { project.moreLink && <Link href={project.moreLink}>More info...</Link>}
          </div>
          <div className="basis-2/12"></div>
          <div className="basis-5/12 projImage"><Image className="" src={`/images/timeline/${project.image}`} width="384" height="384" alt={project.title} /></div>
        </div>
      </div>
    )});
  return (
    <>
      <h1>Project Timeline</h1>
      <div className="timeline">
        { timeline }
      </div>
    </>
  );
};
export default Timeline;
