const apis = {
  getIntersectionObserverOptions: (targetelement: string) => {
    const options: IntersectionObserverInit = {
      root: document.querySelector('#container-scroll') as Element,
      rootMargin: '0px',
      threshold: .90
    }
    return options
  },
}

export default apis