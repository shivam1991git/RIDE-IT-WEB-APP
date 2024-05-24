import React from 'react'
import DefaultLayout from "../components/DefultLayout"
import {Col, Row, Form, Input, Edit} from 'antd'
import {useDispatch , useSelector} from 'react-redux'
import {addCar} from '../redux/actions/carsActions'
import Spinner from '../components/Spinner'
import Footer from '../components/footer';

function AddCar() {

    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)

    function onFinish(values){

        values.bookedtimeSlots =[]
        dispatch(addCar(values))
        console.log(values)
    }
  return (
    <div className='home'>
    <DefaultLayout>
        {loading && (<Spinner />)}
        <Row justify='center mt-5'>
            <Col lg={12} sm={24}>
                <Form className='bs1 p-2'layout='vertical' onFinish={onFinish} style={{backgroundColor:'wheat'}}>
                    <h1>Add New Car</h1>
                <hr/>
                    <Form.Item name='name' label='Car name' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name='image' label='Image url' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name='rentPerHour' label='Rent per hour' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name='capacity' label='Capacity' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name='fuelType' label='Fuel Type' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <div className='text-right'>
                    <button className='btn1'>Add Car</button>
                    </div>
                </Form>
            </Col>
        </Row>
    </DefaultLayout>
    <Footer/>
    </div>
  )
}

export default AddCar