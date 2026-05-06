import React from 'react'
import Card from './components/card'
function App() {

 const jobs = [
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png",
    company: "Google",
    datePosted: "5 days ago",
    post: "Senior Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Lahore, Pakistan"
  },
  {
    brandlogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEUAAAD////7+/u3t7f39/fd3d3V1dXx8fHn5+fh4eH09PSzs7NKSkooKCi7u7s1NTVPT0+enp5mZmZYWFh/f389PT2oqKiJiYkuLi5eXl6WlpbExMRubm4PDw8bGxt0dHSXXjyPAAAE40lEQVR4nNWb6baqMAyFI0NBkEEOgwjq+7/lFQVkaGpxtQ13/4aub7UlTbMDHMzIc5trVtyOUg+DZpiXArv6g5caqecNQHl5AYNsqTe0QzUtTBRKvaMZiuUAO4Oy8tucCWJyqDiBpcg3erWcJgDqkMBOKySAu0MK1dw5TBDJvawJyl4vXaeaEurKRQIoCaFChAnk9rkWKBtjunhkUA3GBJXkCOqh/AiFkovnGqCCDGU6+VRQ2Ie3YfWUQx1xJtlvTz3U+gwe9Sc9iGKoUjBRjAjK553CvVq5w1g91BlnustPlFooR7B4jw3jKIUSTBRYRFBWgTPJBnPlUOhB/Fy8LROlEsrKUaYi2DSSQqgjfhJv+PIUQ+Epi2TCqQPqoYpJJRTGdN0+knao7UwKoRifSa6koQuKmyAkm4KmeqiKw/QnmwDrglrn5sn5x6E0QuXS6a8pqFvm/j6UHqgol6uOIVIH9TmOi/DnhXtLHVSYJEmR1g97U5bClcKI7ruuL385EMmI47BVklCB7zLWxHbcMOZvy9gOwZHF1/ZUXG5Rccqqc8OOX0pCMlCsrNr08tnHbVVKf++BXbWrW3OSVaXoW/gGZbFHwqmpRqfK+76hLbu+rN/tR0jP6IyLodgZT3EhFc+XH7f4u29lNn8dRVBNK0B6LUOOJgEsT78hdaq5WSkKZTGpUZOSkwh4tqCmsNAtXm8DDMrF70tLVfFsEazm+mWCF6pXRxICVQrqTGul1Tguq2p+XV+g+zLF4UL5f1vHfQaKx/lcya/aXIn/FcreNE1KFDVfoES1E226hSKoAL1TatbZQqEcKqbpBXEB5dExTajmUA5uF5hQyIWSj5haNBRrZ1ACC8OMbv4KCvUOzal2FlAeNdFTtTWHcn49I9QpCpd7iiSQz5QOSeMIJfLEzOgxZkAjlKAwb0aT/GWAIv/ypjlVD+VL5b4aNcvVeyiReWicqYdytmXVyrWwvGEPE5VbPCj0HmtEp+WV9AUVkzKt7aQOyqLM7Hjl/w7KJd3m9brQ1kHRBk5OlaSDIj1heA0wQJxHRTyjBIiDFNcpeULVhEwJt8oIh4ByS/H7OgBpEzUkfoESSLcU0iELXPPQlBB/GTzKfY6Ul8E3XyEblSJuLrh0TGg7IyDOvRFhHjMI+ot0647Zp0B4Mb5gphEQRoQCsyzhq6ujTyeE6QCEYQqHIjyO0T8egDA/R1s/YbO9o075/wVFqF0uH77RCaHwkECYDONQhAUX/JghDJ74gUx4zNzQ1IXwQEb7d4HSTUPTYUr3A704EKbD+BUL7yI3IGRTkV6x4IJA0bpX/E0FPmlxkZ+9QEAZqKBAimaUVRdkqwOxTYsUYpGfq02JX7JmxLYap4ERDhax9V9zGwV/6HVTKq5hRN7hstrrgP7wYk4Fx4S0qKEgd1ZQB2r7n2ts03e5LKqfHRRpStVr1SxxpG9Smq/gDoztXpU3g9rDpnqqcGdQR0p3baLQmkDRN0/1aqfdi+QnzaCodEYonxrmo6RxhlalPQSFQVm4k6aumdIeitE2K801zBTnj086uQMUcQvVVK0z9nlSo3xUfppPae+kE13cD9RuQlU2adPdR6oArw69T5d1THtTHlQcplAW9f3vrXAGRd/T3OlVG5r+40AN1Ol6WEDtYKru/hLKo88V3teHf0IkQE50lZxdAAAAAElFTkSuQmCC",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Karachi, Pakistan"
  },
  {
    brandlogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "10 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Islamabad, Pakistan"
  },
  {
    brandlogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "3 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Lahore, Pakistan"
  },
  {
    brandlogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "1 week ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote, Pakistan"
  },
  {
    brandlogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Islamabad, Pakistan"
  },
  {
    brandlogo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    datePosted: "2 months ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Remote, Pakistan"
  },
  {
    brandlogo: "https://logo.clearbit.com/nvidia.com",
    company: "NVIDIA",
    datePosted: "6 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Lahore, Pakistan"
  },
  {
    brandlogo: "https://logo.clearbit.com/uber.com",
    company: "Uber",
    datePosted: "12 days ago",
    post: "Data Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Karachi, Pakistan"
  },
  {
    brandlogo: "https://logo.clearbit.com/airbnb.com",
    company: "Airbnb",
    datePosted: "3 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Remote, Pakistan"
  }
];

  return (
    <div className='parent'>
      {jobs.map(function(val,idx){

    return 
    <div key={idx}>
       <Card logo={val.brandlogo} company={val.company} date={val.datePosted} post={val.post} tag1={val.tag1} tag2={val.tag2} pay={val.pay} location={val.location}/>
    </div>
   
   })}
    </div>
  )
}

export default App

