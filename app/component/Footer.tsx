import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { footerContent } from '@/constants';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));


const Footer = () => {

  const generateFooterContent = () => {
    return footerContent.map((item, index) => (
      <div key={index}>
        <Root>
          <div style={{ textAlign: 'center' }}>
            <strong>{item.name}</strong>
          </div>
          <Divider component="div" role="presentation" light={true}>
            <Chip label={item.chipped} />
          </Divider>
          {item.content.map((content, contentIndex) => (
            <div key={contentIndex} style={{ textAlign: 'center' }}>
              {content}
            </div>
          ))}
        </Root>
      </div>
    ));
  };

  return (
    <>
      <footer>
        <div className="footer-content">{generateFooterContent()}</div>
        <div style={{ textAlign: 'center' }}>2023 &copy; NextChronicles.com </div>
      </footer>
    </>
  );
};

export default Footer;