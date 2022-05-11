import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

type Props = {
  title?: string;
  description?: string;
  path?: string;
};

export const HeadBlock: FC<Props> = (props) => {
  const { title, description, path } = props;
  return (
    <Helmet>
      <title>{title + " | ZebraWolf" ?? "ZebraWolf"}</title>
      <meta name="description" content={"ZebraWolf | " + description + " | Haru(Baru)'s portfolio site." ?? "ZebraWolf | Haru(Baru)'s portfolio site."} />
      <link rel="canonical" href={`https://www.zebrawolf.com${path ?? ''}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href={`${process.env.PUBLIC_URL}/favicon.ico`} rel="shortcut icon" type="image/x-icon" />
      <script src={`${process.env.PUBLIC_URL}/js/analytics.js`}></script>
    </Helmet>
  );
};
