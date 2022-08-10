import PropTypes from 'prop-types';
import { StatList, StatItem } from 'components/Statistics/Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
  <StatList>
    <StatItem>Good: {good}</StatItem>
    <StatItem>Neutral: {neutral}</StatItem>
    <StatItem>Bad: {bad}</StatItem>
    <StatItem>Total: {total}</StatItem>
    <StatItem>Positive feedback: {positivePercentage}%</StatItem>
  </StatList>
);

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};