import React, {useEffect, useState} from "react";
import {get} from "../../../functions/request";
import GridContainer from "../../../components/Grid/GridContainer";
import Carousel from "nuka-carousel";
import {CAROUSEL_SETTINGS} from "../../../config";
import CategoryCard from "../../../components/global/CategoryCard";
import LoadingContainer from "../../../components/global/LoadingContainer";
import Grid from "@material-ui/core/Grid";
import SearchFilters from "./SearchFilter";
import NoDataToShow from "../../../components/global/NoDataToShow";


const modelName = 'item';



export default function StoreProducts() {
  const [items, setItems] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const changeFilter = (filters) =>{

    setItems([])
    setIsLoading(true)
    let query = ""

    for (const property in filters) {
      query += filters[property]?`${property}=${filters[property]}&`:""
    }

    get(`/item?${query}`)
      .then(response => {
        setItems(response.data.res)
      })
      .catch(err=>console.log(err))
      .finally(()=>{
        setIsLoading(false)
      })

  }
  useEffect(()=>{
    changeFilter({})
  },[])



return (
    <>
      <SearchFilters changeFilter={changeFilter}/>

        {
          isLoading
            ?
          <LoadingContainer/>
            :
          items.length
            ?
            <Grid container spacing={2}  style={{margin: '2rem auto'}}>
              {
                items.map(item => {
                  return (
                    <Grid item md={3} sm={6} xs={12}>
                      <CategoryCard key={item._id} category={item}/>
                    </Grid>
                  )
                })
              }
            </Grid>
           :
          <NoDataToShow/>
        }
    </>
  )
}
