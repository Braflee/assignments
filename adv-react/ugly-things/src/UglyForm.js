import React from 'react'
import { UglyConsumer } from './plugins/uglyContext'

function UglyForm(props) {
        return (
        <UglyConsumer>
            {context => (
                <div>
                    <form>
                        <input 
                            name='title'
                            value={context.title}
                            onChange={context.handleChange}
                            placeholder='Title'
                        />
                        <input
                            name='description'
                            value={context.description}
                            onChange={context.handleChange}
                            placeholder='Description'
                        />
                        <input
                            name='imgUrl'
                            value={context.imgUrl}
                            onChange={context.handleChange}
                            placeholder='Image Url'
                        />
                    </form>
                    <button onClick={context.handleSubmit}>Submit</button>
                </div>
            )}
        </UglyConsumer>
    )
}

export default UglyForm