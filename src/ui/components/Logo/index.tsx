import { fontSizes } from '@/ui/theme/font';

import { Image } from '../Image';
import { Row } from '../Row';
import { Text } from '../Text';

export function Logo(props: { preset?: 'large' | 'small' }) {
  const { preset } = props;
  if (preset === 'large') {
    return (
      <Row justifyCenter itemsCenter>
        <img src="./images/logo/wallet-logo.svg" style={{width:'100%', maxWidth:'156px'}} />
        {/* <Image src="./images/logo/wallet-logo.png" size={fontSizes.xxxl} /> */}
        {/* <Text text="UNISAT" preset="title-bold" size="xxl" /> */}
      </Row>
    );
  } else {
    return (
      <Row justifyCenter itemsCenter>
        <img src="./images/logo/wallet-logo.svg" style={{width:'100%', maxWidth:'156px'}} />
        {/* <Text text="UNISAT" preset="title-bold" /> */}
      </Row>
    );
  }
}
