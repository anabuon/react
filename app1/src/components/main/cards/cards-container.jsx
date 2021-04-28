import React, { useEffect, useState } from 'react'
import { apiCall } from '../../../api/mockedAPI'
import { Card } from './card'
import styles from './cards-container.module.scss'
import { CardsCreationForm } from './cards-creation-form'

const CardsContainer = (props) => {
  useEffect(() => {
    apiCall().then((data) => {
      setCards(data)
    })
  }, [])
  const [cards, setCards] = useState([])
  const [titleValue, setTitleValue] = useState('')
  const [genderValue, setGenderValue] = useState('male')
  const [ageValue, setAgeValue] = useState('')
  const [imageValue, setImageValue] = useState('')

  const handleChangeTitle = (e) => {
    setTitleValue(e.target.value)
  }

  const handleChangeGender = (e) => {
    setGenderValue(e.target.value)
  }

  const handleChangeAge = (e) => {
    if (e.target.value >= 0 && e.target.value <= 120) {
      setAgeValue(e.target.value)
    }
  }

  const handleChangeImage = (e) => {
    setImageValue(e.target.value)
  }

  const deleteCards = (id) => {
    const newCardsData = cards.filter((item) => item.id !== Number(id))
    setCards(newCardsData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      titleValue !== '' &&
      genderValue !== '' &&
      ageValue !== '' &&
      imageValue !== ''
    ) {
      const arrayId = cards.length !== 0 ? cards.map((item) => item.id) : [1]
      const newId = Math.max(...arrayId)
      const newCard = {
        id: newId + 1,
        age: ageValue,
        title: titleValue,
        imageUrl: imageValue,
        gender: genderValue,
      }
      setCards([...cards, newCard])
      setTitleValue('')
      setAgeValue('')
      setGenderValue('male')
      setImageValue('')
    }
  }

  const handleClick = (e) => {
    const selectedCard = e.target.closest('button')
    if (selectedCard && selectedCard.dataset.name === 'cross') {
      deleteCards(selectedCard.dataset.id)
      return
    }
  }

  if (!cards.length) {
    return (
      <section className={styles.content}>
        <div className="wrapper">
          <p className={styles.noCards}>No cards yet</p>
          <CardsCreationForm
            onSubmit={handleSubmit}
            handleSubmit={handleSubmit}
            handleChangeTitle={handleChangeTitle}
            handleChangeAge={handleChangeAge}
            handleChangeGender={handleChangeGender}
            handleChangeImage={handleChangeImage}
            titleValue={titleValue}
            genderValue={genderValue}
            ageValue={ageValue}
            imageValue={imageValue}
          />
        </div>
      </section>
    )
  }
  return (
    <section className={styles.content}>
      <div className="wrapper">
        <h2 className={styles.title}>HEROES</h2>
        <ul onClick={handleClick} className={styles.list}>
          {cards.map((card) => {
            return (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                gender={card.gender}
                image={card.imageUrl}
                age={card.age}
              />
            )
          })}
        </ul>
        <CardsCreationForm
          onSubmit={handleSubmit}
          handleSubmit={handleSubmit}
          handleChangeTitle={handleChangeTitle}
          handleChangeAge={handleChangeAge}
          handleChangeGender={handleChangeGender}
          handleChangeImage={handleChangeImage}
          titleValue={titleValue}
          genderValue={genderValue}
          ageValue={ageValue}
          imageValue={imageValue}
        />
      </div>
    </section>
  )
}
export default CardsContainer
