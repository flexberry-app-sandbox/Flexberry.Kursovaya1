﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Пользователь.
    /// </summary>
    // *** Start programmer edit section *** (Пользователь CustomAttributes)

    // *** End programmer edit section *** (Пользователь CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПользовательE", new string[] {
            "ФИО as \'ФИО\'",
            "Админ as \'Админ\'"})]
    [View("ПользовательL", new string[] {
            "ФИО as \'ФИО\'",
            "Админ as \'Админ\'"})]
    public class Пользователь : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИО;
        
        private bool fАдмин;
        
        // *** Start programmer edit section *** (Пользователь CustomMembers)

        // *** End programmer edit section *** (Пользователь CustomMembers)

        
        /// <summary>
        /// Админ.
        /// </summary>
        // *** Start programmer edit section *** (Пользователь.Админ CustomAttributes)

        // *** End programmer edit section *** (Пользователь.Админ CustomAttributes)
        public virtual bool Админ
        {
            get
            {
                // *** Start programmer edit section *** (Пользователь.Админ Get start)

                // *** End programmer edit section *** (Пользователь.Админ Get start)
                bool result = this.fАдмин;
                // *** Start programmer edit section *** (Пользователь.Админ Get end)

                // *** End programmer edit section *** (Пользователь.Админ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Пользователь.Админ Set start)

                // *** End programmer edit section *** (Пользователь.Админ Set start)
                this.fАдмин = value;
                // *** Start programmer edit section *** (Пользователь.Админ Set end)

                // *** End programmer edit section *** (Пользователь.Админ Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Пользователь.ФИО CustomAttributes)

        // *** End programmer edit section *** (Пользователь.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Пользователь.ФИО Get start)

                // *** End programmer edit section *** (Пользователь.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Пользователь.ФИО Get end)

                // *** End programmer edit section *** (Пользователь.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Пользователь.ФИО Set start)

                // *** End programmer edit section *** (Пользователь.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Пользователь.ФИО Set end)

                // *** End programmer edit section *** (Пользователь.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПользовательE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПользовательE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПользовательE", typeof(IIS.Kursovaya1.Пользователь));
                }
            }
            
            /// <summary>
            /// "ПользовательL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПользовательL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПользовательL", typeof(IIS.Kursovaya1.Пользователь));
                }
            }
        }
    }
}
