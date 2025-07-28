import crypto from 'crypto';

export default function GitLogEntry({entryData}) {
  const authorEmail = 'jacobrs@users.noreply.github.com';
  const authorName = 'Jacob Gagné';

  const commitHash = crypto.createHash('sha1').update(entryData['companyName']).digest('hex');

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
          <p key={point} className='indented'>* {point}</p>
        )
      }
    </div>
  )
}
