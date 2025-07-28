import crypto from 'crypto';

export default function GitLogEntry({entryData}) {
  const authorEmail = 'jacobrs@users.noreply.github.com';
  const authorName = 'Jacob Gagné';

  const commitHash = crypto.createHash('sha1').update(entryData['companyName']).digest('hex');

  return (
    <div className='entry-container'>
      <p className='commit-hash'>Commit {commitHash}</p>
      <p className='author-info'>Author: {authorName} {`<${authorEmail}>`}</p>
      <p className='date-info'>Date: &nbsp;&nbsp;{entryData['startDate']}</p>
      <br/>
      <p className='company-name'>&nbsp;&nbsp;&nbsp;&nbsp;{entryData['companyName']}</p>
      <p className='job-title'>&nbsp;&nbsp;&nbsp;&nbsp;{entryData['jobTitle']}</p>
      <br/>
      {
        entryData['points'].map( point =>
          <p key={point}>&nbsp;&nbsp;&nbsp;&nbsp;* {point}</p>
        )
      }
    </div>
  )
}
