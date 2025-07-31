import crypto from 'crypto';
import Keyword from './Keyword';
import highlightedWords from '../data/highlighted-words.json';

export default function GitLogEntry({entryData}) {
  const authorEmail = 'jacobrs@users.noreply.github.com';
  const authorName = 'Jacob Gagné';

  const commitHash = crypto.createHash('sha1').update(entryData['companyName']).digest('hex');

  const parseTextWithKeywords = (text) => {
    const words = text.split(/(\s+)/);
    return words.map((word, index) => {
      const cleanWord = word.toLowerCase();
      
      for (const [type, wordList] of Object.entries(highlightedWords)) {
        if (wordList.some(highlightWord => highlightWord.toLowerCase() === cleanWord)) {
          return <Keyword key={index} word={word} type={type} />;
        }
      }
      
      return word;
    });
  };

  return (
    <div className='entry-container'>
      <p className='commit-hash'>
        Commit <span className='hash-full'>{commitHash}</span>
        <span className='hash-short'>{commitHash.substring(0, 7)}</span>
      </p>
      <p className='author-info'>Author: {authorName} <span className='author-email'>{`<${authorEmail}>`}</span></p>
      <p className='date-info'>Date: {entryData['startDate']}</p>
      <br/>
      <p className='company-name indented'>{entryData['companyName']}</p>
      <p className='job-title indented'>{entryData['jobTitle']}</p>
      <br/>
      {
        entryData['points'].map( point =>
          <p key={point} className='indented'>* {parseTextWithKeywords(point)}</p>
        )
      }
    </div>
  )
}
