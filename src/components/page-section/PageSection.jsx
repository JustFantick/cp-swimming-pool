import React from 'react'
import Container from '../container/Container'

const PageSection = ({ children }) => {
	return (
		<div style={{
			padding: '47px 0',
		}}>
			<Container>
				{children}
			</Container>

		</div>
	)
}

export default PageSection