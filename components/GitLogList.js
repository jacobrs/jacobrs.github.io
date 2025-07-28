import GitLogEntry from './GitLogEntry';

export default function GitLogList({entries}) {
  return (
    <div className='gitlog-container'>
      { entries.map( entry =>
        <GitLogEntry key={entry['companyName']} entryData={entry}/>
      )}
    </div>
  )
}
