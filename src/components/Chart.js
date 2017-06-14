import React from 'react';
import _ from 'lodash';
import { Sparklines , SparklinesLine} from 'react-sparklines';
function avrage(data) {
   return _.round(_.sum(data)/data.length);
}
export default (props) => {
  return(
      <div>
          <Sparklines height={100} width={120} data={props.data}>
              <SparklinesLine color={props.color} />
          </Sparklines>
          <div>{avrage(props.data)}</div>
      </div>
  )
};
