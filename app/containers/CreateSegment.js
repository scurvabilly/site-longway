import React from 'react';
import SegmentEditor from '../components/SegmentEditor';
import SegmentSidebar from '../components/SegmentSidebar';

'use strict';

export default React.createClass({
  render() {
    return (
      <main className='flex-container fill-container'>
        <SegmentEditor />
        <SegmentSidebar />
      </main>
    );
  }
});
