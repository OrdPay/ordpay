import { Text } from '../Text';

interface EmptyProps {
  text?: string;
}
export function Empty(props: EmptyProps) {
  const { text } = props;
  const content = text || 'NO DATA';
  return (
    <div
      style={{
        alignSelf: 'center'
      }}>
      <Text style={{color:'black'}} text={content} preset="sub" textCenter />
    </div>
  );
}
