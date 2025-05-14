import { Link } from 'react-router-dom';
import {
  NotFoundContainer,
  NotFoundHeading,
  NotFoundMessage,
  HomeButton,
} from './styles';

function NotFound() {
  return (
    <NotFoundContainer className="bg-gray-100"> {/* Example of adding Tailwind class */}
      <NotFoundHeading variant="h1">404 - Page Not Found</NotFoundHeading>
      <NotFoundMessage variant="body1">
        Oops! It seems you've wandered into the digital wilderness. The page you seek has vanished.
      </NotFoundMessage>
      <Link to="/" className="no-underline"> {/* Tailwind class directly on Link */}
        <HomeButton variant="contained">
          Back to Home
        </HomeButton>
      </Link>
    </NotFoundContainer>
  );
}

export default NotFound;