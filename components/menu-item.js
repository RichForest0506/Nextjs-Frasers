import menuData from '../public/data/menu-data.json';

const getMenuItem = (menuData, category) => {
  return (
    <>
      {menuData.menu
        .filter((e) => e.category === category)
        .filter((e) => e.available === true)
        .map((data) => {
          return (
            <div key={data['itemName']} className='menu-item'>
              <h3 className='primary-color'>{data.itemName}</h3>
              <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
              <br />
              <div className='primary-color'>{data.price}</div>

              {data.modifier ? (
                <div>
                  <br />
                  {data.modifier}&nbsp;
                  <span className='primary-color'>{data.modifierPrice}</span>
                </div>
              ) : (
                ''
              )}
              <style jsx>{`
                .menu-item {
                  text-align: left;
                  border-color: var(--primary-color-desaturated);
                  border-radius: 7px;
                  padding: 5%;
                  background: var(--surface-color);
                  border-color: var(--primary-color-desaturated);
                }
                .primary-color {
                  color: var(--primary-color-desaturated);
                }
              `}</style>
            </div>
          );
        })}
    </>
  );
};

export default function MenuItem(props) {
  return (
    <div>
      <div className='menu-section'>
        {getMenuItem(menuData, props.category)}
      </div>
      <style jsx>
        {`
          .menu-section {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
            grid-gap: 5px;
            padding: 5%;
          }
        `}
      </style>
    </div>
  );
}
