import React from 'react'
import styled from 'styled-components'
import InputForm from './InputForm'
import SelectForm from './SelectForm'

const ModalAction = ({
  title,
  model,
  text,
  data,
  button,
  onChange,
  submit,
  cancel,
}) => {
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          {text ? <p>{text}</p> : null}
          {model?.map((item, index) => (
            <div key={index}>
              {item.type === 'select' ? (
                <SelectForm
                  label={item.name}
                  id={item.name}
                  name={item.value}
                  value={data[item.value]}
                  onChange={onChange}
                  list={item.list}
                />
              ) : (
                <InputForm
                  label={item.name}
                  id={item.name}
                  name={item.value}
                  value={data[item.value]}
                  onChange={onChange}
                />
              )}
            </div>
          ))}
        </ModalBody>
        <ModalFooter>
          <ButtonSubmit onClick={submit}>{button}</ButtonSubmit>
          <ButtonCancel onClick={cancel}>Annuler</ButtonCancel>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
export default ModalAction

const Modal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background-color: rgba(0, 0, 0, 0.4);
`

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ModalTitle = styled.h2`
  margin: 0;
`

const ModalBody = styled.div`
  margin-top: 20px;
`

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`

const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  height: 28px;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  background-color: #bff1cd;
  border: none;
  color: #1f1f1f;
  cursor: pointer;
  transition: 0.3s;
  margin: 10px 0;
  &:hover {
    background-color: #82e39d;
  }
`

const ButtonCancel = styled.button`
  display: flex;
  align-items: center;
  height: 28px;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  background-color: #f1cdd7;
  border: none;
  color: #1f1f1f;
  cursor: pointer;
  transition: 0.3s;
  margin: 10px 0;
  margin-left: 10px;
  &:hover {
    background-color: #e39da4;
  }
`
