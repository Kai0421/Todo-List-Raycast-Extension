import { List, Icon, Color } from "@raycast/api";
import MockData from '../mock_data/MockTodos'

export default function Command() {
    return (
        <List isShowingDetail>
			{
				MockData &&
				MockData.map( ({title, isCompleted, description}) => (
					<List.Item 
						title={title}
						icon={ isCompleted ? { source: Icon.CircleFilled, tintColor: Color.Green } : { source: Icon.Circle, tintColor: Color.Yellow}}
						detail={
							<List.Item.Detail 
								markdown={description}
							/>
						}
					/>
				) )
			}
        </List>
    )
}